function submitEmail() {
    const name = document.querySelector('#name').value;
    const uniqueSubject = `New website message from ${name}`;

    const subject = document.querySelector('#_subject');
    subject.value = uniqueSubject;
}