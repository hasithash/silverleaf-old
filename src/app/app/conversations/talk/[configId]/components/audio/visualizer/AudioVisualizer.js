class AudioVisualizer {
    constructor(containerId, numDots = 5) {
        this.containerId = containerId;
        this.numDots = numDots;
        this.dots = [];
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
    }

    async init() {
        await this.setupVisualizer();
        await this.setupAudio();
        this.update();
    }

    async setupVisualizer() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id "${this.containerId}" not found.`);
            return;
        }

        container.innerHTML = ''; // Clear any existing content

        for (let i = 0; i < this.numDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            container.appendChild(dot);
            this.dots.push(dot);
        }

        this.applyStyles();
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #${this.containerId} {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80%;
                height: 80%;
                position: relative;
            }
            .dot {
                width: 40px; /* Dot size */
                height: 40px;
                background-color: #fff; /* Dot color */
                border-radius: 50%;
                transform: scaleY(1);
                transition: transform 0.05s ease; /* Faster transition for responsiveness */
                margin: 0 10px; /* Space between dots */
            }
        `;
        document.head.appendChild(style);
    }

    async setupAudio() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 32; // Number of frequency bins
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

        try {
            const stream = document.body.captureStream();
            const source = this.audioContext.createMediaStreamSource();
            source.connect(this.analyser);
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    }

    update() {
        this.analyser.getByteFrequencyData(this.dataArray);

        // Calculate averages and apply mirrored symmetry
        const averages = [];
        for (let i = 0; i < 3; i++) { // Only need to calculate for the first 3 dots
            const start = Math.floor(i * (this.dataArray.length / 3));
            const end = Math.floor((i + 1) * (this.dataArray.length / 3));
            let sum = 0;

            for (let j = start; j < end; j++) {
                sum += this.dataArray[j];
            }

            averages[i] = sum / (end - start);
        }

        // Apply symmetrical mapping
        const mappings = [2, 1, 0, 1, 2]; // Circle 1 = Circle 3, Circle 2 = Circle 4, etc.
        for (let i = 0; i < this.dots.length; i++) {
            const average = averages[mappings[i]];
            const sensitivityFactor = 4; // Increase this value for higher sensitivity
            const scaledValue = (average / 255) * sensitivityFactor;
            this.dots[i].style.transform = `scaleY(${1 + scaledValue})`; // Enhance responsiveness
        }

        requestAnimationFrame(() => this.update());
    }
}





// Export the class for use in other modules
export default AudioVisualizer;


