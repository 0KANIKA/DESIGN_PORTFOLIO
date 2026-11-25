const channels = [
  { id:'event', number:'01', title:'EVENT & CAMPAIGN DESIGN', subtitle:'Visual campaigns & events.', palette:'burgundy', drive:'https://drive.google.com/drive/folders/1titPF9sfRB9XiilkCMXlMDKguheb1lvt', note:'Club events · campaigns · social creatives', featured:true },
  { id:'seasonal', number:'02', title:'Seasons.', subtitle:'Culture in motion', palette:'forest', drive:'https://drive.google.com/drive/folders/1ls8rf2-sN33l54S36Gb46x9Y7IEdA2ab', note:'Christmas · Onam · Pongal · Raksha Bandhan', featured:true },
  { id:'hackathon', number:'03', title:"MISSION '26", subtitle:'Enter another world.', palette:'bronze', drive:'https://drive.google.com/drive/folders/1odb8Lv8sJZlG4M_aK5MG5xAt5Hi2fNhp', note:'Branding · posters · event films' },
  { id:'merchandise', number:'04', title:'MERCHANDISE DESIGN.', subtitle:'Graphics beyond the screen.', palette:'teal', drive:'https://drive.google.com/drive/folders/1-a04_9KadGhErT3PTiWtJrccK9q7zGC7', note:'VITSION · illustrations · mockups' },
  { id:'marketing', number:'05', title:'MARKETING & ADVERTISING.', subtitle:'Creative campaigns & promotional design.', palette:'blue', drive:'https://drive.google.com/drive/folders/1Zd4KsDHALSZ6NRJ-UFK4TDBj7wGceu8d', note:'Promotional · informational · video ads', noteLabel:'MOCK STARTUP' },
  { id:'experimental', number:'06', title:'Outside the brief.', subtitle:'Personal visual experiments.', palette:'plum', drive:'https://drive.google.com/drive/folders/1LhivyonQJXVrUOdvkhHY6sCKiokkh46Q', note:'Typography · collage · editorial' }
];

const grid = document.querySelector('#channel-grid');

function renderChannels() {
  grid.innerHTML = channels.map(c => `<a class="channel-card ${c.palette} ${c.featured ? 'featured' : ''}" href="${c.drive}" target="_blank" rel="noopener noreferrer" aria-label="Open ${c.title} Google Drive folder">
    <div class="card-top"><span>CHANNEL ${c.number}</span><span class="card-arrow">↗</span></div>
    <div class="card-art" aria-hidden="true"><span class="art-stamp">ON AIR</span><span class="art-number">${c.number}</span><span class="art-spark">✦</span></div>
    <div class="card-copy"><p class="card-note">${c.noteLabel ? `<b>${c.noteLabel}</b> · ` : ''}${c.note}</p><h3>${c.title}</h3><p>${c.subtitle}</p></div>
  </a>`).join('');
}

renderChannels();

const storyToggle = document.querySelector('.story-toggle');
const story = document.querySelector('#story');
storyToggle.addEventListener('click', () => {
  const expanded = storyToggle.getAttribute('aria-expanded') === 'true';
  storyToggle.setAttribute('aria-expanded', String(!expanded));
  storyToggle.innerHTML = expanded ? 'Show more <span>↓</span>' : 'Show less <span>↑</span>';
  story.hidden = expanded;
  if (!expanded) story.scrollIntoView({ behavior:'smooth', block:'nearest' });
});
