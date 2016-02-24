<?php 
header('Access-Control-Allow-Origin: *');
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Home extends MX_Controller {
    
	function __construct() {
        parent::__construct();
        
    }


    public function index(){
        $data['module'] = 'home';
        $data['view_file'] = 'home';
        echo Modules::run('template/admin',$data);
    }

}