#include "mouse_win.h"

void Initialize(Local<Object> exports)
{
	Mouse::Initialize(exports);
}

NODE_MODULE(native_mouse, Initialize)
