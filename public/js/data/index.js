var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ boxes:[{right:'15px',
                                    text:'<h4>Samuel Ridgeway</h4>What is home and how do you find it? I will explore this and other questions about what makes a place "home", how you can have multiple homes, and the role memory plays in making a place home.'}],
                                    src:'speakers/Samuel.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};