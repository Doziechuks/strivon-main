     <!-- FOOTER  -->
     <div class="footer">
        <div>
          <p><a href="#">Strivon Academy ©2023. All Rights Reserved</a></p>
        </div>
      </div>
    </div>
  </body>
  <script>
    var menu = document.getElementById("toggleButton");
    var mobileNavs = document.getElementById("sidebar");

    menu.addEventListener("click", function (e) {
      if (mobileNavs.style.display === "none") {
        mobileNavs.style.display = "block";
      } else {
        mobileNavs.style.display = "none";
      }
    });
  </script>
</html>
