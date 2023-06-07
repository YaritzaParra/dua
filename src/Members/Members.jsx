import './Members.css'
import 'animate.css'
import WOW from 'wow.js';
import { useEffect } from 'react';

export function Members() {

	useEffect(function(){
		const wow = new WOW ();
		wow.init();
	},[])
	
    return (
      <>
      <div className='members'> 

	<div className="hero">
		<h1>Colaboraciones</h1>
	</div>
	<div class="container2">
		<div class="evento">
			<div class="foto wow animate__animated animate__slideInUp" >
                <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/if.jpg?alt=media&token=bd73c8bb-1808-4a83-a80f-ef7e48ac0a33" alt="" className='w-100 img-fluid'   />
			</div>
            <h3 class="fecha">If Only con Andrea Bocelli  -2018 </h3>
			
		</div>
		<div class="evento">
			<div class="foto wow animate__animated animate__slideInDown" >
				<img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/Kiss.webp?alt=media&token=b395c26e-af1c-4244-bcbe-47b3c9c67061" alt="" className='w-100 img-fluid ' />
			</div>
			<h3 class="fecha">Kiss and Make Up con Blackpink -2018</h3>
		</div>
		<div class="evento">
			<div class="foto wow animate__animated animate__slideInUp" >
				<img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/calvin-harris-dua-lipa.jpg?alt=media&token=6c4a866a-83d2-4b04-b2c8-f964301b33de" alt="" className='w-100 img-fluid '/>
			</div>
			<h3 class="fecha">One Kiss con Calvin Harris  -2018</h3>
		</div>
		<div class="evento">
			<div class="foto wow animate__animated animate__slideInDown" >
            <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/Prisoner.jpg?alt=media&token=d2a36964-fdaa-41f9-a7e6-cd3039be2c80" alt="" className='w-100 img-fluid '/>
			</div>
			<h3 class="fecha">Prisoner con Miley Cyrus -2020</h3>
		</div>
		<div class="evento">
			<div class="foto wow animate__animated animate__slideInUp" >
				<img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/one%20day.jpg?alt=media&token=b993c6b2-a483-44d8-bfc1-99f82bf878f2" alt="" className='w-100 img-fluid '/>
			</div>
            <h3 class="fecha">ONE DAY con J Balvin, Tainy y Bad Bunny  -2020</h3>
		</div>
		<div class="evento">
			<div class="foto wow animate__animated animate__slideInDown" >
				<img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/demeanor.jpg?alt=media&token=0d699d31-9b2a-4794-99c4-2f18ba282160" alt="" className='w-100 img-fluid  ' />
			</div>
			<h3 class="fecha">Demeanor con Pop Smoke -2021</h3>
		</div>
	</div>

    
  </div>

      </>

    )
  }