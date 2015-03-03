var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:"<h4>Amer Nasr</h4>I will share my experience organizing a student-led movement to fight corruption in Brazil, helping students to find their voices and speak for the many who can't. My goal is to show students they have a voice in the community, and that their goal should be to voice themselves louder.",
                                    src:'speakers/Amer.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};