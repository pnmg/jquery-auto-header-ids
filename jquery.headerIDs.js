/*
  jQuery Auto Header IDs Plugin
  Copyright (C) 2010 Paradigm New Media Group
  http://pnmg.com | http://github.com/pnmg/jquery-auto-header-ids

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
(function($) {
  $.fn.headerIDs = function(settings) {
    var config = {
      verbose: false
    };

    if(settings){ $.extend(config, settings); }

    this.each(function() {
      // element-specific code here
      $('h1,h2,h3,h4,h5', this).each(function(){
        if(!$(this).attr('id')){
          
          // create the id
          id = $(this).text().toLowerCase()
          id = id.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF ]/g, '')
          id = id.replace(/ /g, '_')
          // replace redundant spaces
          id = id.replace(/_{2,}/g, '_')
          
          // test if there is already an element with this id:
          if($('#'+ id).length > 0){
            count = 1
            countID = id + '_' + count
            while($('#'+ countID).length > 0){
              count++
              countID = id + '_' + count
            }
            id = countID
          }
          
          if(config.verbose && window.console){ window.console.log(id) }
          $(this).attr('id', id)
        }
      })
    });

    return this;

  };
})(jQuery);