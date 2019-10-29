console.log(document.getElementsByClassName('form-group'));

document.onreadystatechange = () => {
  if (document.readyState == "interactive") {
    console.log(document.getElementsByClassName('ribs-checkbox rounded'));
  }
};