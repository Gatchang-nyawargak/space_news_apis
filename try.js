body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color:#00003B;
    
}
a{
   text-decoration: none;
   color: #ddd;
   font-size: x-large;
}

#app {
    max-width: 800%; 
    margin: 0 auto;
    padding: 20px;
    /* background-color:rgba(2,47,102,255); */
    background-color: #123456;
    color: white;
}

h1 {
    text-align: center;
}

#search {
    width: 600px;
    padding: 10px;
    margin-bottom: 20px;
}

#btn {
    background-color: #1870cd;
    width: 100px;
    border-radius: 16px;
    border: none;
    color: #ddd;
    font-size: larger;
    padding: 10 15 10 15px;
}

button {
    padding: 10px;
}

.news-item {
     /* border: 3px solid #00008B ; */
    padding: 10px 0;
 /* display: flex;  */
 align-items: start; 
     /* width: 50%;  */
   /* height: 100%; 
   border: solid 1px ;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20px 5px 0; */ 
   border-radius: 5px; 
}

.news-item h2 {
    margin: 0;
    flex-grow: 1; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.news-item p {
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.news-item img {
    width: 100%;
    max-width: 150px; 
    height: auto;
    margin-left: 10px; 
    display: flex;
}

.news-item a {
    color: #007BFF;
    text-decoration: none;
    font-size: larger;
}

.news-item a:hover {
    text-decoration: underline;
}

#news-container {
    display: grid;
    grid-template-columns: 50%50%; /* Adjust column sizes */
    gap: 10px;
    justify-content: center; /* Center the grid items */
}

@media only screen and (max-width: 480px) {
    #search {
        width: 200px;
        padding: 10px;
        margin-bottom: 20px;
        display: flex;
    }
    #btn {
        background-color: #1870cd;
        width: 80px;
        border-radius: 16px;
        color: #ddd;
        font-size: small;
        padding: 5 10 5 10px;
    }
   .content {
        display: flex;
        gap: 10px;
        width: 300px;
        padding: 10px;
        margin-bottom: 20px;
    }
    body {
        width: 80%;
    }
    #news-container {
        display: grid;
        grid-template-columns: 50%; 
        gap: 10px;
        justify-content: center; 
    }

}
