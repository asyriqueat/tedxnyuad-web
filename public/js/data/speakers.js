var speakersArray =  [{
                  name:'Krishna Gaire',
                  id:1,                  
                  year:'Sophomore',
                  origin:'Nepal',
                  srcScreen:'/images/speakers/module/Krishnu.jpg',
                  srcThumb:'/images/speakers/module/Krishnu-thumb.jpg', 
                  topic:'Making Students Lucky',
                  text:'<p>Krishna made it to an U.S. American university from Nepal. He was lucky, though not as luck in a four-leaf clover way, but through a palette of different opportunities. In his talk, Krishna describes his new initiative "Making Students Lucky".</p>'
                  },
                  {name:'Chaeri Lee',
                  id:2,            
                  year:'Alumni',
                  origin:'South Korea',
                  srcScreen:'/images/speakers/module/empty.jpg',
                  srcThumb:'/images/speakers/module/X.jpg',
                  topic:'Where is Waldo really?',
                  text:'<p>Where is Waldo really? A seemingly simple question on a university application form got Chaeri thinking. What happens if we describe ourselves not by what or who we are, but by where we are? In her talk, Chaeri will reflect on self-identity and how we define ourselves.</p>'
                  },
                  {name:'Mariam ElZoghbi',
                  id:3,        
                  year:'Sophomore',
                  origin:'Egypt',
                  srcScreen:'/images/speakers/module/empty.jpg',
                  srcThumb:'/images/speakers/module/X.jpg',
                  topic:'Revolution of Home',
                  text:'<p>In January 2011, there were violent revolutions in Egypt. Mariam was trapped in her home, one day making molotov cocktails and the next baking a cake! In her talk, Mariam tells us her story of those revolutions and how Cairo remains her home. </p>'
                  },
                  {name:'Amal Al Gergawi',               
                  id:4,        
                  year:'Sophomore',
                  origin:'United Arab Emirates',
                  srcScreen:'/images/speakers/module/Amal.jpg',
                  srcThumb:'/images/speakers/module/amal-thumb.jpg',
                  topic:'-',
                  text:'<p>As an Emirati, Amal is proud of the tradition and culture in which she lives. Yet sometimes she cannot help feeling a little distant as she thinks about her Egyptian roots inherited from her mother. In her talk, Amal shares her thoughts on her transnationalism and encourages us to embrace the diversity of our heritage. </p>'
                  },
                  {name:'Doug Cutchins',
                  id:5,           
                  year:'Staff',
                  origin:'USA',
                  srcScreen:'/images/speakers/module/DOugnCoudchens.jpg',
                  srcThumb:'/images/speakers/module/doug-thumb.jpg',
                  topic:'How to win a Rhode’s Scholarship',
                  text:'<p>Doug is a beloved and successful careers advisor at NYUAD. He has an impressive track record of advising two dozen Rhodes national finalists, and four Rhodes scholarship recipients. In his talk, Doug will unveil his key to success and question what success really is!</p>'
                  },
                  {name:'Jessica Mow',
                  id:6,           
                  year:'Freshman',
                  origin:'USA',
                  srcScreen:'/images/speakers/module/empty.jpg',
                  srcThumb:'/images/speakers/module/X.jpg',
                  topic:'-',
                  text:'<p>After graduating from Tufts University, Jessica came to NYUAD to be a Research Assistant in the Neuroscience of Language Lab. As well as her interest in science, Jessica has a passion for media and has been involved in print and radio media. Science and media have a complicated relationship with the ability to educate or misinform. In her talk, Jessica explores this relationship and suggests ways we could be more effective in our efforts.</p>'
                  },
                  {name:'Yahya John Scaccia',
                  id:7,           
                  year:'Sophomore',                               
                  origin:'USA',                    
                  srcScreen:'/images/speakers/module/John.jpg',      
                  srcThumb:'/images/speakers/module/John-thumb.jpg',
                  topic:'My Jihad',
                  text:'<p>Jihad in Arabic means an act of struggle. On receiving his offer to attend New York University Abu Dhabi, Yahya received a less-than-supportive letter from his grandmother. She said ”Your decision that you make now will affect you for the rest of your life” and she was right. In his talk, Yahya addresses the letter and discusses that his jihad is to raise awareness of the true values and beauty of Islam.</p>'
                  },
                  {name:'Joanna Bui',
                  id:8,
                  year:'Senior',
                  origin:'Australia',
                  srcScreen:'/images/speakers/module/Joey.jpg',
                  srcThumb:'/images/speakers/module/joey-thumb.jpg',
                  topic:'Linear Kharma',
                  text:'<p>What goes around comes around? That’s what they say, but what if in your decisions today include thoughts of the past and future and what you do today goes on to affect someone else? Joey’s parents fled the Vietnam War and arrived in Australia as refugees. Today she has the immigrant drive to do well not only for herself, but also for her parents and her grandparents. In her talk, Joey will present the idea of linear kharma in which what you do today can inspire and impact others for the greater good.</p>'    
                  }                
                ];


exports = module.exports = {
                        content: [{ template:'speakers',
                                    macro:'standard',
                                    arguments:{ 
                                        speakers: speakersArray,
                                        speakersMenu: speakerMenuArrangement(2,speakersArray),
                                        arrangement: rowSetup(speakersArray.length),
                                        speakerRows: speakerArrangement(speakersArray, rowSetup(speakersArray.length))
                                              }
                                  },
                                  { template:'standard',
                                    macro:'standard',
                                    arguments:{title:'Speaker Selection and Training',
                                               text:'<p>"Represent You" was the simple statement posed to TEDxNYUAD applicants in the selection process that started in October 2015. Shortening the original list of 60 applicants to just 30, the remainder pitched their speeches to the organizing team, who had the difficult task of narrowing down these extraordinary stories to those featured in this year’s TEDx event.</p>'
                                              }
                                  }],
                        speakers: speakersArray};

function rowSetup(numOfSpeakers){
  switch(numOfSpeakers){
    case 0:
      break;
    case 1:
      return [1];
      break;
    case 2:
      return [2];
      break;
    case 3:
      return [3];
      break;
    case 4:
      return [4];
      break;
    case 5:
      return [3,2];
      break;
    case 6:
      return [3,3];
      break;
    case 7:
      return [4,3];
      break;
    case 8:
      return [3,2,3];
      break;
    case 9:
      return [3,3,3];
      break;
    case 10:
      return [3,4,3];
      break;
    case 11:
      return [4,3,4]
      break;
    case 12:
      return [4,4,4];
      break;
    case 13:
      return [3,4,3,3];
      break;
    case 14:
      return [4,3,4,3];
      break;
    case 15:
      return [3,4,3,2,3];
      break;
    case 16:
      return [4,3,4,3,2];
      break;
    case 17:
      return [3,4,3,4,3];
      break;
    case 18:
      return [4,3,4,3,4];
      break;
    case 19:
      return [3,4,3,4,3,2];
      break;
    case 20:
      return [3,4,3,4,3,3];
      break;
    default:
      return [numOfSpeakers];
  }
}

function speakerMenuArrangement(n,speakersArray){
    //Modify content for small menu
    var numberOfCols=n;
    var speakersMenu=[];
    for(var i=1;i<=speakersArray.length;i++){
        //Get the start position in the array for the given column
        var start=(i-1)*numberOfCols;
        
        //Find the end position in the array for the given column
        var end=(i*numberOfCols>=speakersArray.length) ? speakersArray.length : i*numberOfCols;
        
        speakersMenu[i-1]=[];
        speakersArray.slice(start,end).forEach(function(element){
            speakersMenu[i-1].push(element);
        });
        if(i*numberOfCols>=speakersArray.length)
            break;
    }
    return speakersMenu;
}

function speakerArrangement(immutableSpeakersArray, arrangementArray){
  var speakerList = [];
  var speakersArray = immutableSpeakersArray.slice();
  for (num in arrangementArray) {
    var internalList = [];
    switch(arrangementArray[num]){
      case 2:
        var bsClass = 6;
        break;
      case 3:
        var bsClass = 4;
        break;
      case 4:
        var bsClass = 3;
      default:
        var bsClass = 12/arrangementArray[num];
    }
    for(var speaker = 0;speaker < arrangementArray[num]; speaker++){
      internalList.push(speakersArray[0]);
      internalList[speaker]["bsClass"] = bsClass;
      speakersArray.shift();
    }
    speakerList.push(internalList);
  }
  return speakerList;
}