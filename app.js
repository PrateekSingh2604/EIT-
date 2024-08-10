const express = require('express'); 
const app = express(); 
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/index', (req, res) => { 
    res.render('index'); 
});
app.get('/institution', (req, res) => { 
    res.render('institution'); 
});
app.get('/admission-procedure', (req, res) => { 
    res.render('admission-procedure'); 
});
app.get('/alumni', (req, res) => { 
    res.render('alumni'); 
});
app.get('/applied_science_humanities', (req, res) => { 
    res.render('applied_science_humanities'); 
});
app.get('/applied_science_humanities', (req, res) => { 
    res.render('applied_science_humanities'); 
});
app.get('/bach-comp_app', (req, res) => { 
    res.render('bach-comp_app'); 
});
app.get('/blogs', (req, res) => { 
    res.render('blogs'); 
});
app.get('/Chairman', (req, res) => { 
    res.render('Chairman'); 
});
app.get('/civil-engg', (req, res) => { 
    res.render('civil-engg'); 
});
app.get('/clubs', (req, res) => { 
    res.render('clubs'); 
});
app.get('/comp_sci_engg', (req, res) => { 
    res.render('comp_sci_engg'); 
});
app.get('/contact', (req, res) => { 
    res.render('contact'); 
});
app.get('/Cultural-event', (req, res) => { 
    res.render('Cultural-event'); 
});
app.get('/Dean', (req, res) => { 
    res.render('Dean'); 
});
app.get('/director', (req, res) => { 
    res.render('director'); 
});
app.get('/Echelon-at-a-glance', (req, res) => { 
    res.render('Echelon-at-a-glance'); 
});
app.get('/electronics&comm_eng', (req, res) => { 
    res.render('electronics&comm_eng'); 
});
app.get('/Expert-talks', (req, res) => { 
    res.render('Expert-talks'); 
});
app.get('/IIC', (req, res) => { 
    res.render('IIC'); 
});
app.get('/Industrial-Visit', (req, res) => { 
    res.render('Industrial-Visit'); 
});
app.get('/IPR', (req, res) => { 
    res.render('IPR'); 
});
app.get('/mechanical-engg', (req, res) => { 
    res.render('mechanical-engg'); 
});
app.get('/mngmt_studies', (req, res) => { 
    res.render('mngmt_studies'); 
});
app.get('/Our_Recruiters', (req, res) => { 
    res.render('Our_Recruiters'); 
});
app.get('/overview', (req, res) => { 
    res.render('overview'); 
});
app.get('/Placement-Record', (req, res) => { 
    res.render('Placement-Record'); 
});
app.get('/programs_offered', (req, res) => { 
    res.render('programs_offered'); 
});
app.get('/Research-publication', (req, res) => { 
    res.render('Research-publication'); 
});
app.get('/research', (req, res) => { 
    res.render('research'); 
});
app.get('/Seminar', (req, res) => { 
    res.render('Seminar'); 
});
app.get('/Social-Event', (req, res) => { 
    res.render('Social-Event'); 
});
app.get('/technical-club', (req, res) => { 
    res.render('technical-club'); 
});
app.get('/Training', (req, res) => { 
    res.render('Training'); 
});
app.get('/vision&mission', (req, res) => { 
    res.render('vision&mission'); 
});
app.get('/Webinar', (req, res) => { 
    res.render('Webinar'); 
});
app.get('/big-data', (req, res) => { 
    res.render('big-data'); 
});
app.get('/carpediem', (req, res) => { 
    res.render('carpediem'); 
});
app.get('/electro-robot', (req, res) => { 
    res.render('electro-robot'); 
});
app.get('/GDSC', (req, res) => { 
    res.render('GDSC'); 
});
app.get('/Kshitij', (req, res) => { 
    res.render('Kshitij'); 
});
app.get('/Photography', (req, res) => { 
    res.render('Photography'); 
});
app.get('/Raso-Vaisa', (req, res) => { 
    res.render('Raso-Vaisa'); 
});
app.get('/Samatva', (req, res) => { 
    res.render('Samatva'); 
});
app.get('/social-media', (req, res) => { 
    res.render('social-media'); 
});
app.get('/sports', (req, res) => { 
    res.render('sports'); 
});
app.get('/TLC', (req, res) => { 
    res.render('TLC'); 
});
app.get('/open-source', (req, res) => { 
    res.render('open-source'); 
});
const server = app.listen(4000, function () { 
    console.log('listening to port 4000') 
});