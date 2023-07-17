const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const a_hrefs = document.querySelectorAll('.link');
const tooltips = ["It's That Man Again was a BBC radio comedy programme which ran for twelve series from 1939 to 1949. The shows featured Tommy Handley in the central role, a fast-talking figure, around whom the other characters orbited. The programmes were written by Ted Kavanagh and produced by", "Radio comedy, or comedic radio programming, is a radio broadcast that may involve variety show, sitcom elements, sketches, and various types of comedy found in other media. It may also include more surreal or fantastic elements, as these can be conveyed on a small budget with just a few", "The British Broadcasting Corporation (BBC) is the national broadcaster of the United Kingdom, based at Broadcasting House in London, England. It is the world's oldest national broadcaster, and the largest broadcaster in the world by number of employees, employing over 22,000 staff ", "Thomas Reginald Handley was an English comedian, best known for the BBC radio programme. It's That Man Again('ITMA') which ran between 1939 and 1949.", "An official is someone who holds an office in an organization or government and participates in the exercise of authority. An elected official is a person who is an official by virtue of an election. Officials may also be appointed ex officio. Some official positions may be inherited. A person who"];

a_hrefs.forEach((button, index) => {
button.addEventListener('mouseenter', function() {
    button.setAttribute('data-bs-original-title', tooltips[index]);
});

button.addEventListener('mouseleave', function() {
    button.removeAttribute('data-bs-original-title');
});
});