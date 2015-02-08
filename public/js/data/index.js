var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Charlotte Bekker</h4>With the help of IKEA furniture, Dutch flea markets, and the image of Dubai, I take a closer look at the irony of constructing authenticity.',
                                    src:'speakers/Charlotte.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};