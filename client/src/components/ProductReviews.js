import React, { useState } from 'react'
import RatingBar from './RatingBar'
import ProductReviewForm from './ProductReviewForm'

function ProductReviews( props ){
   const [ showForm, setShowForm ]= useState(false)

   function saveForm( e ){
      e.preventDefault();

      setShowForm(false);
   }

   return ( <>
      <hr />
      <ul class="list-group">
         { props.reviews ? props.reviews.map( review=>(
         <li class="list-group-item">
            <div class='row'>
               <div class='col-8'><b>{review.name}</b></div>
               <div class='col-4 pull-right'><RatingBar rating={review.rating} /></div>
            </div>
            {review.review}
         </li>)) : '<li>No reviews yet</li>' }
      </ul>
      { showForm ? <ProductReviewForm saveForm={saveForm} /> :
         <div class='d-flex justify-content-end'>
            <button class="btn btn-lg btn-secondary" onClick={()=>setShowForm(true)}>
            <i class="fas fa-grin-stars"></i> Add Review</button>
         </div> }
   </>)

}

export default ProductReviews;