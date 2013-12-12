<?php
App::uses('AppController', 'Controller');

class FeedbacksController extends AppController {

  public function index() {
    $user = $this->Auth->user();
    if (!($user)) {
      $this->redirect(array('controller' => 'users', 'action' => 'login'));
    }

    $feedbacks = $this->Feedback->find('all', array(
      'order' => array('Feedback.created DESC')
      ));

    $this->set('user', $user);
    $this->set('feedbacks', $feedbacks);
  }

}