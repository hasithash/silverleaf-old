import { SVGProps } from "react";

export function Info(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><g fill="#888888"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path><path d="M144 176a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m88-48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-92-32a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></path></g></svg>
    )
}

export function Microphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#888888" d="M80 128V64a48 48 0 0 1 96 0v64a48 48 0 0 1-96 0m128 0a8 8 0 0 0-16 0a64 64 0 0 1-128 0a8 8 0 0 0-16 0a80.11 80.11 0 0 0 72 79.6V232a8 8 0 0 0 16 0v-24.4a80.11 80.11 0 0 0 72-79.6"></path></svg>
  )
}

export function MicrophoneMuted(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#888888" d="M213.38 221.92a8 8 0 0 1-11.3-.54l-26.46-29.1A79.74 79.74 0 0 1 136 207.59V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 100.79 52.36l-10.88-12A48 48 0 0 1 80 128V87.09L42.08 45.38a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3m-51.3-92.11a8 8 0 0 0 13.92-5.38V64a48 48 0 0 0-88.84-25.22a8 8 0 0 0 .84 9.59Zm30.1 31.83a8 8 0 0 0 10.36-4.55A79.62 79.62 0 0 0 208 128a8 8 0 0 0-16 0a63.71 63.71 0 0 1-4.36 23.27a8 8 0 0 0 4.54 10.37"></path></svg>
  )
}


export function PhoneFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#888888" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"></path></svg>
  )
}

export function PhoneDisconnect(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#888888" d="M236.28 161.84a16 16 0 0 1-18.38 5.06l-49-17.39l-.29-.11a16 16 0 0 1-9.72-11.59l-6.21-29.75a76.52 76.52 0 0 0-49.68.11l-5.9 29.52a16 16 0 0 1-9.75 11.73l-.29.11l-49 17.37a15.8 15.8 0 0 1-5.71 1.1a16 16 0 0 1-12.63-6.14c-17.23-22.22-15.3-51.71 4.69-71.71c56.15-56.17 151-56.17 207.18 0c19.99 19.98 21.92 49.47 4.69 71.69M216 192H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></path></svg>
  )
}

export function Chat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#888888" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16l59.5.06l14.78 24.17a16 16 0 0 0 27.41.06L156.53 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M84 132a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></path></svg>
  )
}