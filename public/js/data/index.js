var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Mohit Mandal</h4>Having experienced the multiculturalism of Abu Dhabi, I will share my thoughts on a conundrum that continually confronts me: How does one begin to capture the rich, complex - and, often, invisible - lives of the "migrant workers" in a way that is neither condescending nor patronizing?',
                                    src:'speakers/Mohit.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};