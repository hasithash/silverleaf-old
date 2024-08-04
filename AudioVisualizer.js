class AudioVisualizer {
    constructor(containerId, numDots = 5) {
        this.containerId = containerId;
        this.numDots = numDots;
        this.dots = [];
    }

    async init() {
        await this.setupVisualizer();
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
                width: 100%;
                height: 100px;
                background-color: rgba(0, 0, 0, 0.0);
            }
            .dot {
                width: 20px;
                height: 20px;
                background-color: #4a90e2;
                margin: 0 5px;
                transition: height 0.05s ease;
            }
        `;
        document.head.appendChild(style);
    }

    updateWithFFT(fftData) {
        console.log('Received FFT data:', fftData);

        if (!fftData || fftData.length === 0) {
            console.warn('No FFT data received');
            return;
        }

        // Calculate averages for 5 frequency ranges
        const averages = [];
        const rangeSize = Math.floor(fftData.length / 5);
        for (let i = 0; i < 5; i++) {
            const start = i * rangeSize;
            const end = (i + 1) * rangeSize;
            let sum = 0;

            for (let j = start; j < end; j++) {
                sum += fftData[j];
            }

            averages[i] = sum / rangeSize;
        }

        console.log('Calculated averages:', averages);

        // Apply the averages to the dots
        for (let i = 0; i < this.dots.length; i++) {
            const average = averages[i];
            const sensitivityFactor = 30; // Adjust this value to increase or decrease sensitivity
            const minHeight = 20; // Minimum height of the dot
            const maxHeight = 100; // Maximum height of the dot
            const newHeight = Math.max(minHeight, Math.min(maxHeight, minHeight + (average * sensitivityFactor)));
            console.log(`Dot ${i}: Average=${average}, NewHeight=${newHeight}`);
            this.dots[i].style.height = `${newHeight}px`;
            this.dots[i].style.marginTop = `${(maxHeight - newHeight) / 2}px`;
        }
    }
}

// Export the class for use in other modules
export default AudioVisualizer;