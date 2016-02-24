<?php 
header('Access-Control-Allow-Origin: *');
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Home extends MX_Controller {
    
<<<<<<< HEAD
	function __construct() {
        parent::__construct();
        
=======
    public function index()
    {
        //$this->load->view('tpl_index');
        $data['module'] = 'home';
        $data['view_file'] = "tpl_hola";
        echo Modules::run('template/admin',$data);
>>>>>>> 33163f00ca75f229034736c6f6b7460360c5c515
    }


    public function index(){
        $data['module'] = 'home';
        $data['view_file'] = 'home';
        echo Modules::run('template/admin',$data);
    }
<<<<<<< HEAD

}
=======
}
>>>>>>> 33163f00ca75f229034736c6f6b7460360c5c515
