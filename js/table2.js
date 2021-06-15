var btn = document.getElementById("btn");
        btn.onclick = function(){
            var content = document.getElementById("content");
            if(content.value == ""){
                alert('내용을 입력하세요');
                content.focus();
                return false;
            }
            var title = document.getElementById("title");
            if(title.value == ""){
                alert('제목을 입력하세요');
                title.focus();
                return false;
            }
            var writer = document.getElementById("writer");
            if(writer.value == ""){
                alert('작성자를 입력하세요');
                writer.focus();
                return false;
            }
        };

     