<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Users extends MX_Controller {
    

	function __construct() {
        parent::__construct();
        $this->load->model('usersmodel');
    }

    public function index()
    {
        $data['module'] = 'users';
        $data['view_file'] = 'list';
        echo Modules::run('template/admin',$data);
    }

    
    public function get_userlist(){
    	echo $this->usersmodel->get_userList();
    }

    /** 
    * Function to save the user data
    * @param post data
    * @return 
    */
    public function set_user(){
        $data = $this->input->post();

        $out = array('success' => false, 'messages' => array());

        $this->form_validation->set_rules('nombres', 'Nombres', 'required');
        $this->form_validation->set_rules('apellidos', 'Apellidos', 'required');
        $this->form_validation->set_rules('usuario', 'Usuario', 'required');
        $this->form_validation->set_rules('clave', 'Clave', 'required');
        $this->form_validation->set_rules('clave2', 'Repetir Clave', 'required');
        $this->form_validation->set_rules('idestado', 'Estado', 'required');
        $this->form_validation->set_error_delimiters('<p class="text-danger">', '</p>');

        if ($this->form_validation->run()) {

        }else{
            foreach ($_POST as $key => $value) {
                $out['messages'][$key] = form_error($key);
            }
        }

        echo json_encode($out);
    }

}