<meta charset="utf-8">


<style>
    body{
        background: #000;
    }
</style>
<?php



if(isset($_POST['email'])) {




	//$email_to = "unidusmail@gmail.com";
	$email_to = "rkdehdguq94@naver.com";

	$email_subject = "[유니드어스] 문의사항입니다.";
	$email_subject = '=?UTF-8?B?'.base64_encode($email_subject).'?=';



    function died($error) {
        // your error code can go here
        echo "<script> alert('이메일주소 혹은 연락처를 확인해주세요.');";
		echo "history.go(-1);";
		echo "</script>";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['company_name']) ||
		!isset($_POST['first_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $company_name = $_POST['company_name']; // required
	$first_name = $_POST['first_name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "회사명 : ".clean_string($company_name)."\n\n";
	$email_message .= "이름 : ".clean_string($first_name)."\n\n";
    $email_message .= "이메일 : ".clean_string($email_from)."\n\n";
    $email_message .= "연락처 : ".clean_string($telephone)."\n\n";
    $email_message .= "문의사항 : ".clean_string($comments)."\n\n";


// create email headers
$headers = 'From: '.$email_from;
// 제목이 깨질경우 아래 캐릭터셋 적용

@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- include your own success html here -->


echo "<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>";
echo "<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>";
echo "<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>";


<script>
//alert ("유니드어스 문의사항이 접수되었습니다.\n감사합니다.");
//alert ("유니드어스 문의사항이 접수되었습니다.");
swal({
    title: "감사합니다!",
    text: "문의가 접수되었습니다.",
    type: "success"
}).then(function() {
    window.location = "sub3.html#mailBack";
});

//location.href='sub3.html';  //메일보낸후 보이는 페이지
</script>

<?php
}
?>

<?php

function writeUTF8File($filename,$content) {

        $f=fopen($filename,"w");

        # Now UTF-8 - Add byte order mark

        fwrite($f, pack("CCC",0xef,0xbb,0xbf));

        fwrite($f,$content);

        fclose($f);

}

?>




