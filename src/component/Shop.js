import React from 'react';
import './Header.css';
import Product from './Product';



function Shop() {
	return (
		<div>
	       <div className="vh-100 dt w-100 bg-light-red">  
			  <div class="dtc v-mid tc white ph3 ph4-l">
			    <h1 class="f6 f2-m f-subheadline-l fw6 tc">Morroccan Amazigh Carpet</h1>
			    <p>Fans of a responsible and sustainable lifestyle, we unearth for you exceptional Berber rugs, favorites,
			       entirely handmade, in the pure local tradition. Unique, authentic pieces, like an ode to Moroccan craftsmanship. 
			       A passion that drives us, a heritage that carries us, an art of living that brings us together.</p>
			  </div>
		   </div>
		   <div class="mw7 center avenir">
			  <h2 class="baskerville fw1 ph3 ph0-l">The Berber carpet, a history of style</h2>
			  <article class="bt bb b--black-10">
			    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
			      <div class="flex flex-column flex-row-ns">
			        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
			          <img src="https://www.carpetencyclopedia.com/categories/village-carpets/29777_330.jpg" class="db" alt=" a dimly lit room with a computer interface terminal." />
			        </div>
			        <div class="w-100 w-60-ns pl3-ns">
			          <h1 class="f3 fw1 baskerville mt0 lh-title">THE ESSENTIAL BENI OUARAIN CARPET</h1>
			          <p class="f6 f5-l lh-copy">
			           Natural colours, geometric lines and a minimalist style. 
			           This authentic Berber carpet combines comfort and softness. A must-have.
			          </p>
			          <p class="f6 lh-copy mv0"></p>
			        </div>
			      </div>
			    </a>
			  </article>
			  <article class="bb b--black-10">
			    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
			      <div class="flex flex-column flex-row-ns">
			        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
			          <img src="https://www.carpetencyclopedia.com/img/topimage_768.jpg" class="db" alt="a warehouse with stacked shelves." />
			        </div>
			        <div class="w-100 w-60-ns pl3-ns">
			          <h1 class="f3 fw1 baskerville mt0 lh-title">THE ATYPICAL AZILAL RUG</h1>
			          <p class="f6 f5-l lh-copy">
			            We love its intermingling colours, its unique and creative style. 
			            A rug with character to bring a touch of warmth.
			          </p>
			          <p class="f6 lh-copy mv0"></p>
			        </div>
			      </div>
			    </a>
			  </article>
			  <article class="bb b--black-10">
			    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
			      <div class="flex flex-column flex-row-ns">
			        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
			          <img src="https://images.rugvista.net/image/det_newZoom/2579137.jpg" class="db" alt=" a whale's tale coming crashing out of the water." />
			        </div>
			        <div class="w-100 w-60-ns pl3-ns">
			          <h1 class="f3 fw1 baskerville mt0 lh-title">THE AVANT-GARDE BOUCHEROUITE RUG</h1>
			          <p class="f6 f5-l lh-copy">
			            This handmade Moroccan rug with an irregular composition is made of fabric patchworks. 
			            You will love the originality of these singular pieces.
			          </p>
			          <p class="f6 lh-copy mv0"></p>
			        </div>
			      </div>
			    </a>
			  </article>
			</div>
			<div>
			<h1 className="tc">Product</h1>
			<Product />
			<hr />
			</div>
			<div>
				<header class="vh-100 bg-light-red dt w-100">
				    <div 
				      class="dtc v-mid cover ph3 ph4-m ph5-l">
				      <h1 class="f2 f-subheadline-l measure lh-title fw9">You buy directly from the artisan, at the right price</h1>
				      <h2 class="f6 fw6 black">we don't do things like everyone else! We explain everything: here, when you buy a carpet, 
				        you buy it at its fair value, direct from the artisan who sets the price of the product himself. 
				        No intermediaries, a responsible margin, fair prices. An inclusive model in which each actor wins.</h2>
				    </div>
				</header>
			</div>
			<div class="tc w-100">
		      <h1>They talk about us</h1>
		      <a class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://facebook.com" title="Facebook">
			    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
			    <span class="f6 ml3 pr2">Facebook</span>
			  </a>
			  <a class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://github.com/mrmrs" title="GitHub">
			    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
			    <span class="f6 ml3 pr2">GitHub</span>
			  </a>
			  <a class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://instagram.com/mrmrs_" title="Instagram">
			    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
			    <span class="f6 ml3 pr2">Instagram</span>
			  </a>
			</div>
       </div>
		);
}
export default Shop;