const accordion = (triggersSelector , blockSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
    
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-block');
            this.classList.add('animated', 'fadeInDown');
        });
    });
    
};

export default accordion;