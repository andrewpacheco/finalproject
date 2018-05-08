/{function to find the average of all numbers using a default set array}
  function average(){
      var defaultArray = [2,4,6,8,10,12,14];
      var total = 0;
      for(var i = 0; i < defaultArray.length; i++){
          total = total + defaultArray[i];
     }
     var aver = total / defaultArray.length;
     console.log(aver);
   }
