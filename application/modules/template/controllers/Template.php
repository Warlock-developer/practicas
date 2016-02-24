<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Template extends MX_Controller {
<<<<<<< HEAD
    
   function admin($data){
   		$this->load->view('template',$data);
   }

   function user(){
   		//$this->load->view('admin');
   }
=======
 	
	function index(){
 	
 	}

	function one_col($data){
		$this->load->view('one_col',$data);
	}

	function two_col($data){
		$this->load->view('two_col',$data);
	}

	function admin($data){
		$this->load->view('admin',$data);
	}
>>>>>>> 33163f00ca75f229034736c6f6b7460360c5c515
}