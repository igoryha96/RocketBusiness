<?php
if ($_SERVER ["REQUEST_METHOD"] === "post") {

  $name = htmlspecialchars($_POST['name']);
  $tel = htmlspecialchars($_POST['tel']);
  $personal = htmlspecialchars($_POST['personal']);

  $to = "igoryha96@gmail.com";

  $subject = "Новое сообщение от $name"

      $body = "Имя: $name\n";
      $body = "Телефон: $tel\n";
      $body = "Согласие на обработку персональных данных: $personal\n";

      $_headers = "From: $email\r\n";
      $_headers .= "FReply-To: $email\r\n";

      if (mail($to, $subject, $body, $_headers)) {
        echo "Сообщение успешно отправлено!" ;
      }

      else {
        echo "Ошибка при отправке";
      }
      else {
        echo "Некорректный запрос";
      }

}
?>
