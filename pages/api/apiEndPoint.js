

const apiEndPoint = `https://purposecloud.s3.amazonaws.com/challenge-data.json`;
const res =  fetch(apiEndPoint);
const data =  res.then(e => e.json())


console.log(data.then(a => Object.keys(a)), "Fund ID")


// Filtered date and associated ticker value from the data set which were older than current date. 

export const filteredData = data.then(a => {
  let dates = [];
  let tickers = [];
  let values = [];
  let demo = [];
  Object.values(a).forEach(e => {
    Object.values(e.series).forEach(b => {
       const currentDate = "2020-11-26";
       if(currentDate > b.latest_nav.date) {
          dates.push(b.latest_nav.date);
          tickers.push(b.ticker)
          values.push(b.latest_nav.value)
          demo.push(b.latest_nav)
       }
       else if( b.latest_nav.date == null || undefined) {
         
       }
    })
    Object.values(e.series).forEach(c => {
      tickers.forEach(d => {
        if(d == c.ticker) {
          //console.log(Object.keys(e.series).flat())
        }
      })
    })
  })
  const DATA = {
    data: demo,
    tickers: tickers
  };
  return (DATA);
})

console.log(filteredData, "filtered Data")


  //Converted response data into array 
   
  export const Data = data.then((result) => {
     return Object.values(result).filter((e) => {
       return e != null || undefined;
     }) 
  })
 
  
  //Assets under management
  export const aum = Data.then((array) => {
    return array.map(Aum => Aum.aum)
  })


  export const seriesId = Data.then((arr) => {
    const series = arr.map(arr => arr.series);
    //return series
    return Object.values(series.map(e => {
      return Object.keys(e)
    }))
  })
  
  console.log(seriesId, "seriesId")

  //series_id ----- converted series id into Array
  //and then converted it into set in orderd to remove duplicate values and 
  //again converted set values into array so that we can map through the values.


  export const seriesID = seriesId.then(a => {
    let series = [];
    const seriesid = new Set(series.concat(a.flat()))
    let ID = [...seriesid];
    return Object.values(ID)
  })

  console.log(seriesID, "ID of series");


  //Fund 

  export const fund = (data, seriesID) => {
    data.then(e => {
     Object.values(e).forEach(f => {
       Object.values(f).forEach(a => {
         //console.log(seriesID)
       })
     })
    })
  }


