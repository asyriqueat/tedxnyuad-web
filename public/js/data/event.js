exports.content = module.exports = {content:
                     [{ template:'focus',
                        macro:'standard',
                        arguments:{ text:'<p>At TEDxNYUAD we believe in seeking new horizons and broadening  perspectives. As we dream to inspire people to make an impact, this year we assembled a host of speakers who question how we view the world. We want to take our audience on a journey of the unconventional.</p><p>For TEDxNYUAD 2015 we explore the theme <span style="color:red">Question.</span> Our speakers will redefine the concepts of home and memory, provide a fresh look on traditions and videogaming, change the way we see – or don’t see – chess, and show the true power of youth.',
                                    theme:'Question.'
                        }
                      },
                      { template:'panorama',
                        macro:'standard',
                        arguments:{src:'venue.jpg',
                                   text:'<h4>Venue</h4>The 2015 TEDxNYUAD will take place in the New York University Abu Dhabi Conference Center, located in the A6 building on the east side of our campus on Saadiyat Island. The Conference Center contains black leather chairs, ample lighting, and excellent acoustics, ensuring that those attending will have a comfortable and educational experience.'
                                  }
                      },
                      { template:'standard',
                        macro:'maps',
                        arguments:{map:{"lat":24.5227104,"long":54.434284},
                                   apiKey:process.env.GOOGLE_API_KEY,
                                   title:'Address',
                                   text:'<p>The address of the campus at which the TEDxNYUAD will be held is: </p><ul><li><p>New York University Abu Dhabi (NYUAD)</p></li><li><p>Saadiyat Island</p></li><li><p>P.O. Box 129188</p></li><li><p>Abu Dhabi, UAE</p></li></ul><p>See the map for directions. Upon arrival look follow the signs to the Conference Center. In case you come by car, make sure to get a parking ticket.</p>'
                                  }
                      },
                      {
                        template:'standard',
                        macro: 'logodisplay',
                        arguments:{arrangement:[],
                                   title:'Thank you!',
                                   text: '<p>We would not be able to pull off this incredible event without the help and generous support of our wonderful partners:</p>',
                                   partners:[{
                                              name: "NYUAD Institute",
                                              logo:"./images/partners/nyuad-institute.png",
                                             },
                                             {
                                              name: "NYUAD Office of Student Activities",
                                              logo: "./images/partners/nyuad-office-student-activities.png"
                                             }]
                                  }
                      }
                     ]};