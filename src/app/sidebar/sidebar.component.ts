import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LogoComponent } from "./logo/logo.component";
import { MenuComponent } from "./menu/menu.component";
import $ from 'jquery';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [LogoComponent, MenuComponent]
})
export class SidebarComponent implements OnInit,AfterViewInit {
  
  constructor() { 

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
  
    $(function() {
      let sidebar_nicescroll_opts = {
          cursoropacitymin: 0,
          cursoropacitymax: .8,
          zindex: 892
      }, now_layout_class = null;
      
      
      var sidebar_nicescroll;
      var update_sidebar_nicescroll = function() {
          let a = setInterval(function() {
          if(sidebar_nicescroll != null)
              sidebar_nicescroll.resize();
          }, 10);
      
          setTimeout(function() {
          clearInterval(a);
          }, 600);
      }
      
      var sidebar_dropdown = function() {
          if($(".main-sidebar").length) {
      
      
          $(".main-sidebar .sidebar-menu li a.has-dropdown").off('click').on('click', function() {
              var me = $(this);
      
              me.parent().find('> .dropdown-menu').slideToggle(500, function() {
              update_sidebar_nicescroll();
              return false;
              });
              return false;
          });
          }
      }
      sidebar_dropdown();
      
      $(".main-content").css({
          minHeight: $(window).outerHeight() - 95
      })
      
      $(".nav-collapse-toggle").on('click',function() {
          $(this).parent().find('.navbar-nav').toggleClass('show');
          return false;
      });
      
      $(document).on('click', function(e) {
          $(".nav-collapse .navbar-nav").removeClass('show');
      });
      
      var toggle_sidebar_mini = function(mini) {
          let body = $('body');
      
          if(!mini) {
          body.removeClass('sidebar-mini');
          $(".main-sidebar").css({
              overflowX: 'auto'
          });
          setTimeout(function() {
           
          }, 500);
          $(".main-sidebar .sidebar-menu .z-dropdown > li > ul .dropdown-title").remove();
          $(".main-sidebar .sidebar-menu .z-dropdown > li > a").removeAttr('data-toggle');
          $(".main-sidebar .sidebar-menu  .z-dropdown > li > a").removeAttr('data-original-title');
          $(".main-sidebar .sidebar-menu .z-dropdown > li > a").removeAttr('title');
          }else{
            body.addClass('sidebar-mini');
            body.removeClass('sidebar-show');
            sidebar_nicescroll.remove();
            sidebar_nicescroll = null;
   
          }
      }
      
      $("[data-toggle='sidebar']").on('click',function() {
          var body = $("body"),
          w = $(window);
      
          if(w.outerWidth() <= 1200) {
          body.removeClass('search-show search-gone');
          if(body.hasClass('sidebar-gone')) {
              body.removeClass('sidebar-gone');
              body.addClass('sidebar-show');
          }else{
              body.addClass('sidebar-gone');
              body.removeClass('sidebar-show');
          }
      
          update_sidebar_nicescroll();
          }else{
            //   body.removeClass('search-show search-gone');
            //   if(body.hasClass('sidebar-mini')) {
            //       toggle_sidebar_mini(false);
            //   }else{
            //       toggle_sidebar_mini(true);
            //   }
          }
      
          return false;
      });
      
      var toggleLayout = function() {
          var w = $(window),
          layout_class = $('body').attr('class') || '',
          layout_classes = (layout_class.trim().length > 0 ? layout_class.split(' ') : '');
         
      
          if(w.outerWidth() <= 1200) {
              if($('body').hasClass('sidebar-mini')) {
                  toggle_sidebar_mini(false);
                  
              }
      
              $("body").addClass("sidebar-gone");
              $("body").removeClass("layout-2 layout-3 layout-4 sidebar-mini sidebar-show");
              $("body").off('click').on('click', function(e) {
                  if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
                  $("body").removeClass("sidebar-show");
                  $("body").addClass("sidebar-gone");
                  $("body").removeClass("search-show");
      
                  update_sidebar_nicescroll();
                  }
              });
      
              update_sidebar_nicescroll();
      
              if(now_layout_class == 'layout-3') {
                  let nav_second_classes = $(".navbar-secondary").attr('class'),
                  nav_second = $(".navbar-secondary");
      
                  nav_second.attr('data-nav-classes', nav_second_classes);
                  nav_second.removeAttr('class');
                  nav_second.addClass('main-sidebar');
      
                  let main_sidebar = $(".main-sidebar");
                  main_sidebar.find('.container').addClass('sidebar-wrapper').removeClass('container');
                  main_sidebar.find('.navbar-nav').addClass('sidebar-menu').removeClass('navbar-nav');
                  main_sidebar.find('.sidebar-menu .nav-item.dropdown.show a').click();
                  main_sidebar.find('.sidebar-brand').remove();
                  main_sidebar.find('.sidebar-menu').before($('<div>', {
                  class: 'sidebar-brand'
                  }).append(
                  $('<a>', {
                      href: $('.navbar-brand').attr('href'),
                  }).html($('.navbar-brand').html())
                  ));
                  setTimeout(function() {
             
                  }, 700);
      
                  sidebar_dropdown();
                  $(".main-wrapper").removeClass("container");
              }
          }else{
          $("body").removeClass("sidebar-gone sidebar-show");
          if(now_layout_class)
              $("body").addClass(now_layout_class);
      
          let nav_second_classes = $(".main-sidebar").attr('data-nav-classes'),
              nav_second = $(".main-sidebar");
      
          if(now_layout_class == 'layout-3' && nav_second.hasClass('main-sidebar')) {
              nav_second.find(".sidebar-menu li a.has-dropdown").off('click');
              nav_second.find('.sidebar-brand').remove();
              nav_second.removeAttr('class');
              nav_second.addClass(nav_second_classes);
      
              let main_sidebar = $(".navbar-secondary");
              main_sidebar.find('.sidebar-wrapper').addClass('container').removeClass('sidebar-wrapper');
              main_sidebar.find('.sidebar-menu').addClass('navbar-nav').removeClass('sidebar-menu');
              main_sidebar.find('.dropdown-menu').hide();
              main_sidebar.removeAttr('style');
              main_sidebar.removeAttr('tabindex');
              main_sidebar.removeAttr('data-nav-classes');
              $(".main-wrapper").addClass("container");
           
          }else if(now_layout_class == 'layout-2') {
              $("body").addClass("layout-2");
          }else{
              update_sidebar_nicescroll();
          }
          }
      }
      toggleLayout();
      $(window).on('resize',toggleLayout);
      
      
      });
  }

}
