const ctx = document.getElementById('myChart');

const GamePriceHistory = [
  { month: 'January', price: { PC: 12.50, Playstation4: 35, Playstation5: 15, XboxOne: 14.50, XboxSeriesX: 9.99, NintendoSwitch: 1.99 }},
  { month: 'February', price: { PC: 15, Playstation4: 20, Playstation5: 60, XboxOne: 17.75, XboxSeriesX: 18.79, NintendoSwitch: .99 }},
  { month: 'March', price: { PC: 19, Playstation4: 12, Playstation5: 20, XboxOne: 13.50, XboxSeriesX: 59, NintendoSwitch: 10 }},
  { month: 'April', price: { PC: 21, Playstation4: 58, Playstation5: 22, XboxOne: 25, XboxSeriesX: 26, NintendoSwitch: 16 }},
  { month: 'May', price: { PC: 16.50, Playstation4: 26, Playstation5: 13, XboxOne: 19, XboxSeriesX: 75, NintendoSwitch: .79}},
  { month: 'June', price: { PC: 25, Playstation4: 9, Playstation5: 19, XboxOne: 17, XboxSeriesX: 60, NintendoSwitch: 2.35 }},
  { month: 'July', price: { PC: 32, Playstation4: 15, Playstation5: 25, XboxOne: 15, XboxSeriesX: 55, NintendoSwitch: 7.49}},
  { month: 'August', price: { PC: 50, Playstation4: 4, Playstation5: 14, XboxOne: 20, XboxSeriesX: 50, NintendoSwitch: 60 }},
  { month: 'September', price: { PC: 45, Playstation4: 18, Playstation5: 11, XboxOne: 22, XboxSeriesX: 52.50, NintendoSwitch: 80 }},
  { month: 'October', price: { PC: 60, Playstation4: 16, Playstation5: 30, XboxOne: 21, XboxSeriesX: 54, NintendoSwitch: 45}},
  { month: 'November', price: { PC: 59.99, Playstation4: 45, Playstation5: 26, XboxOne: 17, XboxSeriesX: 49.99, NintendoSwitch: 25 }},
  { month: 'December', price: { PC: 10, Playstation4: 20, Playstation5: 60, XboxOne: 10.99, XboxSeriesX: 45, NintendoSwitch: 30 }}
] ;
      
new Chart(ctx, {
  type: 'line',
  title: {
    text:"Histroy Of Game Price"
  },
  data: {
    datasets: [{
     label: 'PC',  
      data: GamePriceHistory,
      backgroundColor: 'pink' , 
      borderColor: 'pink' , 
      parsing: {
        yAxisKey: 'price.PC'
      }
    },{
      label: 'Playstation 4',  
       data: GamePriceHistory,
       backgroundColor: 'yellow' , 
       borderColor: 'yellow' , 
       parsing: {
         yAxisKey: 'price.Playstation4'
       }
     },{
      label: 'Playstation 5',  
       data: GamePriceHistory,
       backgroundColor: 'red' , 
       borderColor: 'red' ,
       parsing: {
         yAxisKey: 'price.Playstation5'
       }
     },{
      label: 'Xbox One',  
       data: GamePriceHistory,
       backgroundColor: 'purple' , 
       borderColor: 'purple' , 
       parsing: {
         yAxisKey: 'price.XboxOne'
       }
     },{
      label: 'Xbox Series X',  
       data: GamePriceHistory,
       backgroundColor: 'green' , 
       borderColor: 'green' , 
       parsing: {
         yAxisKey: 'price.XboxSeriesX'
       }
     },{
      label: 'Nintendo Switch',  
       data: GamePriceHistory,
       backgroundColor: 'blue' , 
       borderColor: 'blue' , 
       parsing: {
         yAxisKey: 'price.NintendSwitch'
       }
     }], 
  },
  options: {
    fill: false ,
    tension: 0.4,
    parsing: {
      xAxisKey: 'month'
    },
    scales: {
      y: {
        ticks: {
            callback: function(value, index, ticks,) {
                return '$' + value;
                     }
                 }      
          }
         },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';

              if (label) {
                label += ': ';
               }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              }
              return label;
            }   
        }
      }
    }    
  }
});