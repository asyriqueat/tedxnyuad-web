var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Mohit Mandal</h4>I played street-cricket with a group of "migrant workers" in an abandoned car park in Abu Dhabi, and learned to challenge my assumptions',
                                    src:'speakers/Mohit.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};