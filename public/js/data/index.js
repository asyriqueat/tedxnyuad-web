var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ boxes:[{right:'15px',
                                    text:'<h4>The Speakers Team</h4>Thanks for a great TEDxNYUAD2015! We hope that you enjoyed the talks. The videos will be up shortly.'}],
                                    src:'speakers.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};