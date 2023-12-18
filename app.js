// // let searchBar = document.getElementById('search'); 
// // // let apikey = "765f57a" //


// // // function displayMovies(array){
// // //     let movies = ""
// // //     array.forEach((card)=>{
// // //         movies +=`<div id="moviesContainer">
// // //                 <div id="searchedMovies">
// // //                     <img src="${card.Poster}" alt="">
// // //                         <h2>${card.Title}</h2>
// // //                         <h3>${card.Type}</h3>
// // //                         <h3>${card.Year}</h3>
// // //                 </div>    
// // //             </div>`

// // //     })
// // //     document.getElementById("container").innerHTML = movies;
// // //   }

// // async function getMovies(){
// //     // searchBar = searchBar.value
// //     try{
// //         let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`) //
// //         console.log(response);

// //         // let data = await response.json();
// //         // displayMovies(data.Search)

// //     }
// //     catch(error){
// //         console.log(error)
// //     }
// // };

// // getMovies()
// // // searchBar.addEventListener("keypress", function(e){
// // //     if(e.key == "Enter"){
// // //         getMovies()
// // //         // console.log(data)
// // //         // displayMovies(data)
// // //     }
// // // })


// // function data(array){
// //     let card = ""
// //     array.forEach((news)=>{
// //       card+=` <div class="article">
// //       <h1>${news.title}</h1>
// //       <img src="${news.image}">
// //       <p>${news.content}</p>
// //     </div>`
// //     })
// //     document.body.innerHTML = card
// //   }

// async function getNewsData() {
//     try {
//       const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
//       // const news = document.createElement('div');
  
//       console.log(response.data);
//     //   data(response.data.articles);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
// //   getNewsData();