var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Meera Al Agroobi</h4>Having been a bully myself, I will disclose how a bully\'s mind operates and show you how to fix it.',
                                    src:'speakers/Meera.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};