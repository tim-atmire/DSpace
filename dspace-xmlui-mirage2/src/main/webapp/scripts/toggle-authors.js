/*
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
(function($) {
	$(document).ready(function () {
		$('#item-view-show-all-authors-link').on('click', showAuthors);
		$('#item-view-hide-authors-link').on('click', hideAuthors);
	});

	function showAuthors() {
		$('#item-view-show-all-authors-link').addClass('hidden');
		$('#item-view-hide-authors-link').removeClass('hidden');

		$('div[class*=author-list-]').removeClass('hidden');
	}

	function hideAuthors() {
		$('#item-view-hide-authors-link').addClass('hidden');
		$('#item-view-show-all-authors-link').removeClass('hidden');

		$.each($('div[class*=author-list-]'), function () {
			var index = parseInt($(this).attr('class').substring(12));

			if (index > DSpace.author_limit) {
				$(this).addClass('hidden');
			}
		});
	}
})(jQuery);