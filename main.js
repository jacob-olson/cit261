const form = document.forms[0];

const input = form.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);

//input.addEventListener('change', () => alert('changed'), false);

form.addEventListener ('submit', search, false);
//function search() {
//    alert(' Form Submitted');
//}

function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}