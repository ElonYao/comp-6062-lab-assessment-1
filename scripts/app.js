const studentFullName = 'Yilong Yao';
const studentNumber = '1164879';
const displayInformation=`${studentFullName}-${studentNumber}`;
console.log(displayInformation);

const headerContent = document.querySelector('header h1');
headerContent.innerHTML = displayInformation;

headerContent.classList.add('headingPrimary');