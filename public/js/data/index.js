var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Maitha Al Memari</h4>Through my experiences with my abaya, I will explain and dismiss the stereotype of the "black cloak" in the UAE context, while further encouraging people to break the stereotypes that surround them with reality.',
                                    src:'speakers/Maitha.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};