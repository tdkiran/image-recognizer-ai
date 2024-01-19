import styles from './page.module.css'

export default function Home() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const imagePlaceholder = document.getElementById('image-placeholder');
      imagePlaceholder.innerHTML = `<img src="${imageUrl}" alt="Uploaded image"/>`;
    } 

    const outputEl = document.getElementById('output');
    
    outputEl.innerText = 'thinking 🤔'




  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div style={{ padding: '30px', margin: '30px', }} >
        <h1 className="mt-12 text-center px-30">Image Recognizer 🤖</h1>
      </div>

      <label className="bg-blue-500 text-white px-4 py-2 cursor-pointer w-18 ">
        Upload a file
        <input type="file" onChange={handleFileUpload} className="hidden" />
      </label>

      <div id="output" className='text-lg font-bold pt-4'> </div>

      <div id="image-placeholder" style={{ width: '600px', height: '600px', margin: '20px'}}></div>

    </div>
  )
}
