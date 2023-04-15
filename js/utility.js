// this fuction mainly created for error handle and give alert message 
function errorHandle(values_array, alert_message) {
    if (values_array.every(a => a > 0 && !isNaN(a) && a != ""))
        return true;
    else
        alert(alert_message);
    return false;
}
// change input field value with new value 
function setInputFieldValue(inputField, newValue) {
    inputField.value = newValue;
}
// change text field value with new value 
function setTextElementValue(element, newValue) {
    element.innerText = newValue;
}