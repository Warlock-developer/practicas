<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Template extends MX_Controller {
 	
	function index(){
 	
 	}

	function one_col(){
		$this->load->view('one_col');
	}

	function two_col(){
		$this->load->view('two_col');
	}

	function admin(){
		$this->load->view('admin');
	}
}