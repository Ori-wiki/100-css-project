const fileInput = document.querySelector('.file-input');
const dropzone = document.querySelector('.drop-zone');
const progressBar = document.querySelector('.bar');
const uploadBtn = document.querySelector('.upload-btn');
const dragoverEvents = ['dragover', 'dragenter'];
const dragleaveEvents = ['dragleave', 'dragend', 'drop'];

fileInput.addEventListener('change', (e) => {
  const fileName = e.target.files[0].name;
  dropzone.innerHTML = `<span class="file-name">${fileName}</span>`;
});

const addDragoverStyles = () => dropzone.classList.add('on-dragover');

const removeDragoverStyles = () => dropzone.classList.remove('on-dragover');

dragoverEvents.forEach((e) => {
  dropzone.addEventListener(e, addDragoverStyles);
});

dragleaveEvents.forEach((e) => {
  dropzone.addEventListener(e, removeDragoverStyles);
});

uploadBtn.addEventListener('click', () => {
  if (fileInput.files.length > 0) {
    fileInput.disabled = true;
    progressBar.classList.add('active');
    dropzone.style.border = 'none';
    dropzone.style.background = '#FFF';
    dropzone.innerHTML = `<img src="https://100dayscss.com/codepen/syncing.svg" class="syncing">`;
    uploadBtn.textContent = 'Uploading...';
    setTimeout(() => {
      dropzone.innerHTML = `<img src="https://100dayscss.com/codepen/checkmark.svg" class="done">`;
      uploadBtn.textContent = 'Upload Complete';
    }, 3000);

    uploadBtn.classList.add('disabled');
    uploadBtn.disabled = true;
  }
});
