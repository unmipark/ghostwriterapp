import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import  './Home.css';
import HomeVideo from '../../components/HomeVideo/HomeVideo.js';
import LoginBar from '../../components/LoginBar/LoginBar.js';
import About from '../../components/About/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
	//main home page 
	//renders welcome video, sign up/in bar, and about section
    render() {
		
		return(

			 <div className="App">

				<div className="container">
					 <div className="row">
						<div className="col-9">
							<div classname="HomeVideo">
								<HomeVideo />	
			 				</div> 
						</div> 
						<div className="col">
							<LoginBar />
						</div>
						
					 </div> 

				</div>  
				<div class="row">
						<About />
					</div>
				
			</div>

		);
		
    }

}


export default Home;
