#include "mouse_win.h"

void Initialize(Handle<Object> exports) {
	Mouse::Initialize(exports);
}

NODE_MODULE(native_mouse, Initialize)
