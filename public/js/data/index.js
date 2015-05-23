var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{src:'splash.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};