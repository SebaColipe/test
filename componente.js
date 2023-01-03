
export class Componente{

    constructor () {}

    static downloadFile(){
        const downloadInstance = document.createElement('a');
        downloadInstance.href = 'http://localhost:3000/subidas/archi.txt';
        downloadInstance.target = "_blank";
        downloadInstance.download = filename;

        document.body.appendChild(downloadInstance);
        downloadInstance.click();
        document.body.removeChild(downloadInstance);
    };
}