function _get_selected_text(id) {
    // セレクトボックスからテキストを取得する
    var element = document.getElementById(id);
    var index = element.selectedIndex;
    return element.options[index].text;
  }
  
  function go_link() {
    // セレクトボックスの選択値を取得する
    var month = _get_selected_text("month");
    var day = _get_selected_text("day");

    // リンク先を設定する
    link = "../占い結果HTML/"+month+"-"+day+".html";
    location.href = link
  }

  function go_link2() {
    // セレクトボックスの選択値を取得する
    var link_name = "";

    // 4つのチェックボックスをHTML要素を取得する
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    var d = document.getElementById("D");
    
    // Aがチェックされてたら、Aの内容(value)をリンク名にする
    if (a.checked == true) {
     link_name = a.value;

    // Bがチェックされてたら、Bの内容(value)をリンク名にする
    } else if (b.checked == true) {
     link_name = b.value;
    
    // Cがチェックされてたら、Cの内容(value)をリンク名にする
    } else if (c.checked == true) {
      link_name = c.value;
    
    // Dがチェックされてたら、Dの内容(value)をリンク名にする
    } else if (d.checked == true) {
      link_name = d.value;
    }  

    // リンク先を設定する
    location.href = "../HTML/" + link_name + ".html";

 /*    // デバッグ用。不必要ならコメントアウトまたは削除する
    alert(link_name) */
  }


  function send_email() {
    // テキストボックスから入力されたメールアドレスを取得する
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    var gender = "";
    if (male.checked == true){
      gender = "male";
     }
    if (female.checked == true){
      gender = "female";
     }
     if (other.checked == true){
      gender = "other";
     }
    var age = _get_selected_text("age");
    var nationality = document.getElementById("nationality");
    var body = email.value + ", " + gender + ", " + age + ", " + nationality.value;
/*   alert(body);
  return; */

    // メールアドレスのバリデーション
    var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if (pattern.test(email.value)) {
      message.textContent = "";
    } else {
      message.textContent = "This is not a valid email address";
      return;
    }
    
    
    // メールを送信する
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "onishiyoshinobu@gmail.com",
        Password : "E6584F9694B8B3F4FE738A96B505C238C513",
        To : "onishiyoshinobu@gmail.com",
        From : "onishiyoshinobu@gmail.com",
        Subject : "Inquery",
        Body : body
      }).then(
      ); 
       message.textContent = "Email has sent";
/*   alert("Send"); */
}
