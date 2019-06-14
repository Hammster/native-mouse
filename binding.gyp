{
	"targets": [
		{
			"target_name": "native-mouse",
			'win_delay_load_hook': 'true',
			'conditions': [
				['OS == "win"', {
					"sources": [
						"source/mouse_hook_win.cc",
						"source/mouse_win.cc",
						"source/addon_win.cc"
					]
				}],
				['OS == "mac"', {
					"sources": [
						"source/mouse_mac.cc",
						"source/addon_mac.cc"
					],
					"link_settings": {
						"libraries": [
							"/System/Library/Frameworks/ApplicationServices.framework"
						]
					},
				}],
			],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
			]
		}
	]
}
