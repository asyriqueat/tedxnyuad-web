var data = require('./posts.js');

exports = module.exports = {content:
                            
                      [{template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Jovan Jovancevic</h4>With my talk I seek to raise awareness and teach training methods connected to playing blindfold chess for everyday use.',
                                    src:'speakers/Jovan.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:data.content.posts
                                   }
                      }]};