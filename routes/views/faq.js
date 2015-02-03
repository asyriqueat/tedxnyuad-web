var keystone = require('keystone');
    
exports = module.exports = function(req,res){
    var view = new keystone.View(req, res),
		locals = res.locals;
    
    locals.section = 'faq';
    locals.content = {title:'Frequently Asked Questions',
                      text:'<p>Below you find a compiled list of the most asked questions. The list is not exhaustive, so feel free to <a href="contact">contact us</a> any time and we will get back to you as soon as possible.</p>',
                      questions:[{id:'1',
                                title:'When will TEDxNYUAD 2015 take place?',
                                text:'<p>The event will take place on Sunday the 19th of April, 2015 at 6pm.</p>'},
                               {id:'2',
                                title:'Where will it happen?',
                                text:'<p>TEDxNYUAD’s main live event is taking place in the Conference Center in A6C building at NYUAD’s Saadiyat Campus.</p><p>We will also be hosting additional live-stream viewing parties in the East and West forum at NYUAD’s Saadiyat Campus.</p>'},
                               {id:'3',
                                title:'What is the difference between the main live event and the live streaming events?',
                                text:'<p>The main live event will be where all the 12 speakers will be giving their talks to a selected audience of 100 members. This event will also be concurrently live streamed to two additional locations at NYUAD’s Saadiyat Campus for the general public and other NYUAD students, faculty and staff to watch.</p>'},
                                {id:'4',
                                title:'Why is there only 100 people invited to the main live event?',
                                text:'<p>According to TEDx rules, the live event cannot have more than 100 audience members and therefore the event will be by invitation only. Invitees will be a selection of prominent personalities from our community.</p>'},
                                {id:'5',
                                title:'Why are there three locations?',
                                text:'<p>We want to provide the opportunity for members of NYUAD as well as Abu Dhabi community to be able to watch the event and so we have designated two live-stream viewing events (also limited to 100 audience members each) that will take place in East and West forum in Campus Center on NYUAD Saadiyat Campus.</p>'},
                                {id:'6',
                                title:'How can I secure a ticket to the event(s)?',
                                text:'<p>We will be releasing more information about how to attend TEDxNYUAD. Please stay tuned by following us on Twitter and Facebook.</p><p>There will be three events happening simultaneously on NYUAD Saadiyat Campus and three ways to secure your ticket:</p><h5>1) By Invitation</h5><p>In order to attend the live event, you will need to have received an invitation in the mail as well as an email. You need to RSVP [insert hyperlink] in order to secure your ticket. You will then be enlisted in our system and can attend the event on the day.</p><h5>2) By winning a VIP ticket</h5><p>We have also reserved additional VIP tickets for the main live event for the public and the NYUAD community to win. All you need to do is enter the raffle [insert sign raffle sign up sheet hyperlink] in order to watch the event live!</p><h5>3) By RSVP to live streaming events</h5><p>There will be 2 live-stream viewing events of TEDxNYUAD both held at NYUAD’s Saadiyat Campus in the East and West forums. You can RSVP [insert RSVP hyperlink] to these viewing events as an NYUAD student, staff or faculty, or as general public.</p>'},
                                {id:'7',
                                title:'Does it cost anything to attend TEDxNYUAD?',
                                text:'<p>No. The event is completely free of charge.</p>'},
                                {id:'8',
                                title:'I am abroad, are there any ways of watching the event live?',
                                text:'<p>TEDxNYUAD will be streamed at selected NYU Global Network University sites. If you are currently at a site that is not hosting a live-stream event, and would like to help host one yourself, please <a href="/contact">contact us</a>.</p>'},
                                {id:'9',
                                title:'Who is speaking at the event?',
                                text:'<p>We have selected 12 unique speakers who are all questioning our conventional views of the world. You can read more about them under the <a href="/speakers">speakers</a> tab.</p>'},
                                {id:'10',
                                title:'How did you select the speakers?',
                                text:'<p>We opened submissions of stories and ideas from the NYUAD community from which we received about 60 amazing stories. Of those we invited 28 speakers to a “Pitch session” where each speaker presented their talks for 3 minutes.</p><p>Of the 28 speakers at the Pitch session, a committee of TEDxNYUAD organizers and NYUAD staff selected a composition of 12 speakers that makes up the 2015 speakers team.</p>'},
                                {id:'11',
                                title:'What is the theme for this years event?',
                                text:'<p>For TEDxNYUAD 2015 we will be exploring the theme <span style="color:red">Question.</span></p><p>At TEDxNYUAD we believe in opening new horizons and broadening our perspectives. As we dream to inspire people to make an impact, this year we have assembled a host of speakers who question how we view the world. We want to take our audience on a journey of the unconventional.</p><p>Our speakers will be sharing their untold stories as they redefine the concepts of home and memory, provide a fresh look on traditions and videogaming, change the way we see (or don’t see) chess, and show the true power of youth.</p>'}
                                ]
                     };
    
    // Render the view
	view.render('faq');
}




                                 


















 


